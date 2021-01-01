import {HyphensToSpacesPipe} from './hyphens-to-spaces.pipe';

describe('HyphensToSpacesPipe', () => {
    let pipe: HyphensToSpacesPipe;

    beforeEach(() => {
        pipe = new HyphensToSpacesPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('returns the same value if argument is not of type string', () => {
        const expectedResult = null;
        const actualResult = pipe.transform(expectedResult);
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns the string with spaces between words instead of hyphens', () => {
        const startingValue = 'trip-time';
        const actualResult = pipe.transform(startingValue);
        expect(actualResult).toEqual('trip time');
    });

});
