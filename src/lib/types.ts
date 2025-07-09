export type Priority = 1 | 2 | 3;

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string | null;
  completed: boolean;
  completedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}