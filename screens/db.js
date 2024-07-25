import * as SQLite from 'expo-sqlite';

const openDatabase = async () => {
  const db = await SQLite.openDatabaseAsync('qrCodes.db');
  
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS qrCodes (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      qrCode TEXT NOT NULL,
      faritra TEXT NOT NULL
    );
  `);
  
  return db;
};

export const init = async () => {
  try {
    const db = await openDatabase();
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export const insertQRCode = async (name, qrCode, faritra) => {
  try {
    const db = await openDatabase();
    const result = await db.runAsync('INSERT INTO qrCodes (name, qrCode, faritra) VALUES (?, ?, ?)', [name, qrCode, faritra]);
    console.log('Insert Result:', result);
  } catch (error) {
    console.error('Error inserting QR code:', error);
  }
};

export const getQRCode = async (qrCode) => {
  try {
    const db = await openDatabase();
    const row = await db.getFirstAsync('SELECT * FROM qrCodes WHERE qrCode = ?', [qrCode]);
    return row;
  } catch (error) {
    console.error('Error getting QR code:', error);
  }
};

export const getAllQRCodes = async () => {
  try {
    const db = await openDatabase();
    const rows = await db.getAllAsync('SELECT * FROM qrCodes');
    return rows;
  } catch (error) {
    console.error('Error getting all QR codes:', error);
  }
};

export const deleteQRCode = async (id) => {
  try {
    const db = await openDatabase();
    await db.runAsync('DELETE FROM qrCodes WHERE id = ?', [id]);
    console.log(`QR code with ID ${id} deleted`);
  } catch (error) {
    console.error('Error deleting QR code:', error);
  }
};