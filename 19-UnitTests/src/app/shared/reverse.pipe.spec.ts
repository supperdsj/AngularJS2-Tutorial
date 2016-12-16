/* tslint:disable:no-unused-variable */
import {ReversePipe} from "./reverse.pipes";

describe('UserComponent', () => {
  it('test reverse transform', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
});
