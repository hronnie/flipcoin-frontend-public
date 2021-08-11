export class UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    aszf: boolean;
    dataProtection: boolean;
    newsletter: boolean;
    emailVerified: boolean;

    public constructor(init?: Partial<UserProfile>) {
        Object.assign(this, init);
    }
}
