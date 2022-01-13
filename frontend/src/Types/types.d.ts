interface IPersonPostValues {
    name?: string;
    email?: string;
    favoriteProgrammingLanguage?: string;
}
  

interface IPersonData {
    name: string;
    email: string;
    favoriteProgrammingLanguage: string;
    activeTaskCount: number;
    id: string;
}


interface ITaskPostValues {
    title: string;
    details: string;
    dueDate: string;
    status: "active" | "done";
    ownerId: string;
}

interface ITaskPutValues {
    title: string;
    details: string;
    dueDate: string;
    status: "active" | "done" | undefined;
}


interface ITaskData {
    id: string;
    title: string;
    details: string;
    dueDate: string;
    status: "active" | "done";
    ownerId: string;
}