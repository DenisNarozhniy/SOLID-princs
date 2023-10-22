enum SubscriptionTypes {
    BASIC = 'BASIC',
    PREMIUM = 'PREMIUM'
}
   
class User {
    constructor (
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly email: string,
        public readonly subscriptionType: SubscriptionTypes,
        public readonly subscriptionExpirationDate: Date
    ) {}
   
    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class AccessManager {
    public static hasUnlimitedContentAccess(user: User) {
        const now = new Date();
   
      return user.subscriptionType === SubscriptionTypes.PREMIUM
        && user.subscriptionExpirationDate > now;
    }
   
    public static getBasicContent(movies) {
        return movies.filter(movie => movie.subscriptionType === SubscriptionTypes.BASIC);
    }
   
    public static getPremiumContent(movies) {
        return movies.filter(movie => movie.subscriptionType === SubscriptionTypes.PREMIUM);
    }
   
    public static getContentForUserWithBasicAccess(movies) {
        return AccessManager.getBasicContent(movies);
    }
   
    public static getContentForUserWithUnlimitedAccess(movies) {
        return movies;
    }
}