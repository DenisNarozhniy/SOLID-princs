interface ICache {
    get<T>(key: string): T | null;
    set<T>(key: string, user: T): void;
}
   
interface IRemoteService {
    get<T>(url: string): Promise<T>;
}
   
class UserService {
    constructor(
      private readonly cache: ICache,
      private readonly remoteService: IRemoteService
    ) {}
   
    async getUser(): Promise<User> {
      const cachedUser = this.cache.get<User>('user');
   
      if (cachedUser) {
        return cachedUser;
      }
   
      const user = await this.remoteService.get<User>('/user');
      this.cache.set('user', user);
   
      return user;
    }
}