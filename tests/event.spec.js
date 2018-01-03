import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import MarvelWrapper from '../src/index';

describe('Event', () => {
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

    it('should have getEvent method', () => {
      expect(marvel.event.getEvent).to.exist;
    });

    it('should have getEvents method', () => {
      expect(marvel.event.getEvents).to.exist;
    });

  });

  describe('getEvent', () => {
    it('should call fetch method', () => {
      const event = marvel.event.getEvent();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let event = marvel.event.getEvent('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTy?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      event = marvel.event.getEvent('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTk?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({event: 'name'});
      const event = marvel.event.getEvent('4aawyAB9vmq3uQ7FjRGTk');
      expect(event.resolveValue).to.be.eql({event: 'name'});

    });
  });

  describe('getEvents', () => {
    it('should call fetch method', () => {
      const events = marvel.event.getEvents();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let events = marvel.event.getEvents();
      let url = `http://gateway.marvel.com/v1/public/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({events: 'name'});
      const events = marvel.event.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      expect(events.resolveValue).to.be.eql({events: 'name'});

    });
  });

  describe('getCharacters', () => {
    it('should call fetch method', () => {
      const events = marvel.event.getCharacters();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let events = marvel.event.getCharacters('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTy/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      events = marvel.event.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTk/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({events: 'name'});
      const events = marvel.event.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      expect(events.resolveValue).to.be.eql({events: 'name'});

    });
  });

  describe('getComics', () => {
    it('should call fetch method', () => {
      const comics = marvel.event.getComics();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.event.getComics('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTy/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.event.getComics('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTk/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.event.getComics('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });


  describe('getCreators', () => {
    it('should call fetch method', () => {
      const comics = marvel.event.getCreators();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.event.getCreators('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTy/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.event.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTk/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.event.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });

  describe('getSeries', () => {
    it('should call fetch method', () => {
      const series = marvel.event.getSeries();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.event.getSeries('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTy/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      series = marvel.event.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTk/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.event.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });

  describe('getStories', () => {
    it('should call fetch method', () => {
      const stories = marvel.event.getStories();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.event.getStories('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTy/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.event.getStories('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/events/4aawyAB9vmq3uQ7FjRGTk/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.event.getStories('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('search', () => {
    it('should call fetch method', () => {
      const events = marvel.event.search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let events = marvel.event.search('man');
      let url = `http://gateway.marvel.com/v1/public/events?nameStartsWith=man&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      events = marvel.event.search('spider');
      url = `http://gateway.marvel.com/v1/public/events?nameStartsWith=spider&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({events: 'name'});
      const events = marvel.event.search('spider');
      expect(events.resolveValue).to.be.eql({events: 'name'});

    });
  });
});
