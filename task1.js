function LocalStorageManager() {}

LocalStorageManager.prototype.saveData = function(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`Data with key '${key}' saved successfully.`);
  } catch (error) {
    console.error(`Error saving data with key '${key}': ${error.message}`);
  }
};

LocalStorageManager.prototype.getData = function(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    console.log(`Data with key '${key}' retrieved successfully:`, data);
    return data;
  } catch (error) {
    console.error(`Error retrieving data with key '${key}': ${error.message}`);
    return null;
  }
};


const localStorageManager = new LocalStorageManager();

const exampleData = { name: 'Arturchik', city: 'Zaporizhzhia' };
localStorageManager.saveData('user', exampleData);
const retrievedData = localStorageManager.getData('user');
