import { openDB } from 'idb';
import { Task } from '@/lib/types'

const DB_NAME = 'todoApp';
const STORE_NAME = 'tasks';

// Initialize or get the DB
async function getDB() {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('priority', 'priority');
        store.createIndex('title', 'title');
        store.createIndex('dueDate', 'dueDate');
        store.createIndex('completed', 'completed');
      }
    },
  });
}

// CRUD Functions
export async function addTask(task: Task) {
  const now = new Date().toISOString();
  const db = await getDB();
  await db.add(STORE_NAME, task);
  await db.add(STORE_NAME, {
    ...task,
    createdAt: now,
    updatedAt: now,
    completedAt: task.completed ? now : null,
  });
}

export async function getAllTasks(): Promise<Task[]> {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
}

// this is actualy an upsert by default behavior or db.put
export async function updateTask(task: Task) {
  const db = await getDB();
  await db.put(STORE_NAME, {
    ...task,
    updatedAt: new Date().toISOString(),
    completedAt: task.completed ? task.completedAt ?? new Date().toISOString() : null,
  });
}

export async function deleteTask(id: string) {
  const db = await getDB();
  await db.delete(STORE_NAME, id);
}
