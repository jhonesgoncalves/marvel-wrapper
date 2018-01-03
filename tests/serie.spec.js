import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import MarvelWrapper from '../src/index';

describe('Serie', () => {
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

    it('should have getSerie method', () => {
      expect(marvel.serie.getSerie).to.exist;
    });

    it('should have getSeries method', () => {
      expect(marvel.serie.getSeries).to.exist;
    });

  });

  describe('getSerie', () => {
    it('should call fetch method', () => {
      const serie = marvel.serie.getSerie();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let serie = marvel.serie.getSerie('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTy?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      serie = marvel.serie.getSerie('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTk?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({serie: 'name'});
      const serie = marvel.serie.getSerie('4aawyAB9vmq3uQ7FjRGTk');
      expect(serie.resolveValue).to.be.eql({serie: 'name'});

    });
  });

  describe('getSeries', () => {
    it('should call fetch method', () => {
      const series = marvel.serie.getSeries();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.serie.getSeries();
      let url = `http://gateway.marvel.com/v1/public/series?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.serie.getSeries('4aawyAB9vmq3uQ7FjRGTk');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });

  describe('getCharacters', () => {
    it('should call fetch method', () => {
      const series = marvel.serie.getCharacters();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.serie.getCharacters('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTy/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      series = marvel.serie.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTk/characters?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.serie.getCharacters('4aawyAB9vmq3uQ7FjRGTk');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });

  describe('getComics', () => {
    it('should call fetch method', () => {
      const comics = marvel.serie.getComics();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.serie.getComics('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTy/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.serie.getComics('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTk/comics?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.serie.getComics('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });


  describe('getCreators', () => {
    it('should call fetch method', () => {
      const comics = marvel.serie.getCreators();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let comics = marvel.serie.getCreators('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTy/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      comics = marvel.serie.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTk/creators?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({comics: 'name'});
      const comics = marvel.serie.getCreators('4aawyAB9vmq3uQ7FjRGTk');
      expect(comics.resolveValue).to.be.eql({comics: 'name'});

    });
  });

  describe('getEvents', () => {
    it('should call fetch method', () => {
      const series = marvel.serie.getEvents();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.serie.getEvents('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTy/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      series = marvel.serie.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTk/events?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.serie.getEvents('4aawyAB9vmq3uQ7FjRGTk');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });

  describe('getStories', () => {
    it('should call fetch method', () => {
      const stories = marvel.serie.getStories();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let stories = marvel.serie.getStories('4aawyAB9vmq3uQ7FjRGTy');
      let url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTy/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      stories = marvel.serie.getStories('4aawyAB9vmq3uQ7FjRGTk');
      url = `http://gateway.marvel.com/v1/public/series/4aawyAB9vmq3uQ7FjRGTk/stories?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({stories: 'name'});
      const stories = marvel.serie.getStories('4aawyAB9vmq3uQ7FjRGTk');
      expect(stories.resolveValue).to.be.eql({stories: 'name'});

    });
  });

  describe('search', () => {
    it('should call fetch method', () => {
      const series = marvel.serie.search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      let series = marvel.serie.search('man');
      let url = `http://gateway.marvel.com/v1/public/series?nameStartsWith=man&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);

      series = marvel.serie.search('spider');
      url = `http://gateway.marvel.com/v1/public/series?nameStartsWith=spider&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

    it('should return correct data from Promise', () => {
      promise.resolves({series: 'name'});
      const series = marvel.serie.search('spider');
      expect(series.resolveValue).to.be.eql({series: 'name'});

    });
  });
});
