//Consistency & No Typos
//Single Source of Truth
//Easy Validation & Schema Safety
export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
}; //refere one role in your code

export const AvailableUserRole = Object.values(UserRolesEnum); //check all posible roles at once

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const availableTaskStatues = Object.values(TaskStatusEnum);
