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

describe('Creator', () => {
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

    it('should have getCreator method', () => {
      expect(marvel.creator.getCreator).to.exist;
    });

    it('should have getCreators method', () => {
      expect(marvel.creator.getCreators).to.exist;
    });

  });

  describe('getCreator', () => {
    it('should call fetch method', () => {
      const creator = marvel.creator.getCreator();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let creator = marvel.creator.getCreator('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTy?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      creator = marvel.creator.getCreator('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTk?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({creator: 'name'});
      const creator = marvel.creator.getCreator('4aawyAB9vmq3uQ7FjRGTk');
      expect(creator.resolveValue).to.be.eql({creator: 'name'});

    });
  });

  describe('getCreators', () => {
    it('should call fetch method', () => {
      const creators = marvel.creator.getCreators();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let creators = marvel.creator.getCreators();
      let url = `http://gateway.marvel.com/v1/public/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({creators: 'name'});
      const creators = marvel.creator.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      expect(creators.resolveValue).to.be.eql({creators: 'name'});

    });
  });

  describe('getComics', () => {
    it('should call fetch method', () => {
      const comics = marvel.creator.getComics();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.creator.getComics('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTy/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.creator.getComics('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTk/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.creator.getComics('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });

  describe('getEvents', () => {
    it('should call fetch method', () => {
      const events = marvel.creator.getEvents();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let events = marvel.creator.getEvents('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTy/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      events = marvel.creator.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTk/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({events: 'name'});
      const events = marvel.creator.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      expect(events.resolveValue).to.be.eql({events: 'name'});

    });
  });

  describe('getSeries', () => {
    it('should call fetch method', () => {
      const series = marvel.creator.getSeries();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.creator.getSeries('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTy/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      series = marvel.creator.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTk/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.creator.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });

  describe('getStories', () => {
    it('should call fetch method', () => {
      const stories = marvel.creator.getStories();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.creator.getStories('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTy/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.creator.getStories('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/creators/4aawyAB9vmq3uQ7FjRGTk/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.creator.getStories('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('search', () => {
    it('should call fetch method', () => {
      const creators = marvel.creator.search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let creators = marvel.creator.search('man');
      let url = `http://gateway.marvel.com/v1/public/creators?nameStartsWith=man&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      creators = marvel.creator.search('spider');
      url = `http://gateway.marvel.com/v1/public/creators?nameStartsWith=spider&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({creators: 'name'});
      const creators = marvel.creator.search('spider');
      expect(creators.resolveValue).to.be.eql({creators: 'name'});

    });
  });
});
