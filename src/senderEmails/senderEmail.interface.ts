export interface IsenderEmail {
  email: string;
  port: number;
  host: string;
  password: string;
}

export interface IsingleSenderEmail extends IsenderEmail {
  id?: string;
}

export interface IsenderEmails {
  [key: string]: IsenderEmail;
}

export interface UpdateBody {
  port?: string;
  host?: string;
  password?: string;
  updatedAt?: Date;
}
