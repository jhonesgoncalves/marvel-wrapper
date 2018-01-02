// getAlbum
// getAlbumTracks

import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import MarvelWrapper from '../src/index';

describe('Comic', () => {
  let marvel;
  let stubedFetch;
  let promise;

  beforeEach( () => {
    marvel = new MarvelWrapper({
      privateKey: 'foo',
      publicKey: 'pool'
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach( () => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getComic method', () => {
      expect(marvel.comic.getComic).to.exist;
    });

    it('should have getComics method', () => {
      expect(marvel.comic.getComics).to.exist;
    });

  });

  describe('getComic', () => {
    it('should call fetch method', () => {
      const comic = marvel.comic.getComic();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comic = marvel.comic.getComic('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/comics/4aawyAB9vmq3uQ7FjRGTy?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comic = marvel.comic.getComic('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/comics/4aawyAB9vmq3uQ7FjRGTk?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comic: 'name'});
      const comic = marvel.comic.getComic('4aawyAB9vmq3uQ7FjRGTk');
      expect(comic.resolveValue).to.be.eql({comic: 'name'});

    });
  });

  describe('getComics', () => {

      it('should call fetch method', ()=> {
        const comics = marvel.comic.getComics();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch correct URL', () => {
        const comics = marvel.comic.getComics();
        let url = `http://gateway.marvel.com/v1/public/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
        expect(stubedFetch).to.have.been.calledWith(url);
      });

      it('should return correct data from Promise', () => {
        promise.resolves({comics: 'name'});
        const comics = marvel.comic.getComics(['4aawyAB9vmq3uQ7FjRGTy', '4aawyAB9vmq3uQ7FjRGTk']);
        expect(comics.resolveValue).to.be.eql({comics: 'name'});
      });

  });

});
