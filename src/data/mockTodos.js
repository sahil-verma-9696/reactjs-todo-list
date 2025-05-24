export const dummyTodos = [
  {
    id: 1,
    title: "🛒 Buy groceries",
    description: "Milk, eggs, bread, and vegetables",
    label: 5,
  },
  {
    id: 2,
    title: "🩺 Doctor Appointment",
    description: "Annual check-up at 5 PM",
    label: 2,
  },
  {
    id: 3,
    title: "💻 Project Deadline",
    description: "Finish frontend components by today",
    label: 2,
  },
  {
    id: 4,
    title: "🏋️‍♂️ Morning Workout",
    description: "30 min cardio and pushups",
    label: 4,
  },
  {
    id: 5,
    title: "👥 Team Meeting",
    description: "Daily stand-up at 10 AM",
    label: 5,
  },
  {
    id: 6,
    title: "📖 Read a book",
    description: "Continue reading 'Atomic Habits'",
    label: 3,
  },
  {
    id: 7,
    title: "💡 Pay electricity bill",
    description: "Due tomorrow",
    label: 3,
  },
  {
    id: 8,
    title: "🧹 Clean workspace",
    description: "Organize desk and delete old files",
    label: 3,
  },
  {
    id: 9,
    title: "📞 Call Mom",
    description: "Check in and talk for a while",
    label: 1,
  },
  {
    id: 10,
    title: "🐞 Fix login bug",
    description: "Users can't login with special characters",
    label: 5,
  },
  {
    id: 11,
    title: "📧 Email HR",
    description: "Send updated documents",
    label: 4,
  },
  {
    id: 12,
    title: "🌱 Water plants",
    description: "Indoor and balcony plants",
    label: 2,
  },
  {
    id: 13,
    title: "🗺️ Plan weekend trip",
    description: "Look up options near Manali",
    label: 1,
  },
  {
    id: 14,
    title: "🕒 Submit timesheet",
    description: "Deadline is 6 PM",
    label: 1,
  },
];

/**
 *
 * User :-
 *  Add TODO { Title, Description, Label }
 *  Remove TODO
 *  Edit TODO
 *  Filter TODO { Label Based }
 *      |
 *      |
 *      |
 * TODO App :-
 *  User Input -> [createTODO({userInput})/removeTODO(todoId)/updateTODO(todoId,{updatedTODO})] -> Context -> LocalStorage
 *  localStorage ->
 */
