import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import MarvelWrapper from '../src/index';

describe('Storie', () => {
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

    it('should have getStorie method', () => {
      expect(marvel.storie.getStorie).to.exist;
    });

    it('should have getStories method', () => {
      expect(marvel.storie.getStories).to.exist;
    });

  });

  describe('getStorie', () => {
    it('should call fetch method', () => {
      const storie = marvel.storie.getStorie();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let storie = marvel.storie.getStorie('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTy?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      storie = marvel.storie.getStorie('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTk?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({storie: 'name'});
      const storie = marvel.storie.getStorie('4aawyAB9vmq3uQ7FjRGTk');
      expect(storie.resolveValue).to.be.eql({storie: 'name'});

    });
  });

  describe('getStories', () => {
    it('should call fetch method', () => {
      const stories = marvel.storie.getStories();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.storie.getStories();
      let url = `http://gateway.marvel.com/v1/public/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.storie.getStories('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('getCharacters', () => {
    it('should call fetch method', () => {
      const stories = marvel.storie.getCharacters();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.storie.getCharacters('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTy/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.storie.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTk/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.storie.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('getComics', () => {
    it('should call fetch method', () => {
      const comics = marvel.storie.getComics();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.storie.getComics('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTy/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.storie.getComics('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTk/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.storie.getComics('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });


  describe('getCreators', () => {
    it('should call fetch method', () => {
      const comics = marvel.storie.getCreators();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.storie.getCreators('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTy/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.storie.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTk/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.storie.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });

  describe('getEvents', () => {
    it('should call fetch method', () => {
      const stories = marvel.storie.getEvents();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.storie.getEvents('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTy/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.storie.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTk/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.storie.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('getSeries', () => {
    it('should call fetch method', () => {
      const stories = marvel.storie.getSeries();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.storie.getSeries('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTy/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.storie.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/stories/4aawyAB9vmq3uQ7FjRGTk/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.storie.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('search', () => {
    it('should call fetch method', () => {
      const stories = marvel.storie.search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.storie.search('man');
      let url = `http://gateway.marvel.com/v1/public/stories?nameStartsWith=man&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.storie.search('spider');
      url = `http://gateway.marvel.com/v1/public/stories?nameStartsWith=spider&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.storie.search('spider');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });
});
