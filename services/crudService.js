const fs = require('fs').promises;
const path = require('path');

function createCrudService(fileName) {
  const dbPath = path.join(__dirname, '../data', fileName);

  async function readData() {
    try {
      const data = await fs.readFile(dbPath, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      console.error(`Error reading from ${fileName}:`, err);
      return [];
    }
  }

  async function writeData(data) {
    try {
      await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(`Error writing to ${fileName}:`, err);
    }
  }

  return {
    async getAll() {
      return await readData();
    },

    async getById(id) {
      const items = await readData();
      return items.find(item => item.id == id);
    },

    async create(newItem) {
      const items = await readData();
      items.push(newItem);
      await writeData(items);
    },

    async update(id, updatedItem) {
      const items = await readData();
      const index = items.findIndex(item => item.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem };
        await writeData(items);
      }
    },

    async remove(id) {
      let items = await readData();
      items = items.filter(item => item.id != id);
      await writeData(items);
    }
  };
}

module.exports = createCrudService;
