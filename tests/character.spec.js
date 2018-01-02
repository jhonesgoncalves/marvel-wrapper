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

describe('Character', () => {
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

    it('should have getCharacter method', () => {
      expect(marvel.character.getCharacter).to.exist;
    });

    it('should have getCharacters method', () => {
      expect(marvel.character.getCharacters).to.exist;
    });

  });

  describe('getCharacter', () => {
    it('should call fetch method', () => {
      const character = marvel.character.getCharacter();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let character = marvel.character.getCharacter('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTy?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      character = marvel.character.getCharacter('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTk?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({character: 'name'});
      const character = marvel.character.getCharacter('4aawyAB9vmq3uQ7FjRGTk');
      expect(character.resolveValue).to.be.eql({character: 'name'});

    });
  });

  describe('getCharacters', () => {
    it('should call fetch method', () => {
      const characters = marvel.character.getCharacters();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let characters = marvel.character.getCharacters();
      let url = `http://gateway.marvel.com/v1/public/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({characters: 'name'});
      const characters = marvel.character.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      expect(characters.resolveValue).to.be.eql({characters: 'name'});

    });
  });

  describe('getComics', () => {
    it('should call fetch method', () => {
      const comics = marvel.character.getComics();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.character.getComics('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTy/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.character.getComics('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTk/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.character.getComics('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });

  describe('getEvents', () => {
    it('should call fetch method', () => {
      const events = marvel.character.getEvents();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let events = marvel.character.getEvents('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTy/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      events = marvel.character.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTk/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({events: 'name'});
      const events = marvel.character.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      expect(events.resolveValue).to.be.eql({events: 'name'});

    });
  });

  describe('getSeries', () => {
    it('should call fetch method', () => {
      const series = marvel.character.getSeries();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.character.getSeries('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTy/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      series = marvel.character.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTk/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.character.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });

  describe('getStories', () => {
    it('should call fetch method', () => {
      const stories = marvel.character.getStories();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.character.getStories('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTy/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.character.getStories('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/characters/4aawyAB9vmq3uQ7FjRGTk/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.character.getStories('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

});
