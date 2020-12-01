export interface User {
    id?: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    isactive?: boolean;
    locked?: boolean;
    createdon?: string;
    createdby?: string;
    modifiedon?: string;
    modifiedby?: string;
    permissions: String[];
    [prop: string]: any;
  }