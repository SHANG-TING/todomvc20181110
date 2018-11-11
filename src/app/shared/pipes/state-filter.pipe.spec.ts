import { StateFilterPipe } from './state-filter.pipe';

describe('StatePipe', () => {
  it('create an instance', () => {
    const pipe = new StateFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
