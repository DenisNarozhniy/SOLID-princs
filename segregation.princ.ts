interface IDataSource {
    read(): Promise<string>;
}
   
interface IRemoteDataSource extends IDataSource {
    connect(): Promise<boolean>;
}
   
class DbSource implements IRemoteDataSource {
    connect():any {
        return null;
    }
    read():any {
        return null;
    }
}
   
class FileSource implements IDataSource {
    read():any {
        return null;
    }
}