export class DataService {
  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve('Data');
        }, 100);
    });
    return resultPromise;
  }
}
