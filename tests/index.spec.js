import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import MarvelWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('MarvelWrapper Library', () => {
  it('should create an instance of SpotifyWrappper', () => {
    let marvel = new MarvelWrapper({});
    expect(marvel).to.be.an.instanceof(MarvelWrapper);
  });

  it('should receive apiURL as an option', () => {
    let marvel = new MarvelWrapper({
      apiURL: 'blabla',
    });

    expect(marvel.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    let marvel = new MarvelWrapper({});
    expect(marvel.apiURL).to.be.equal('http://gateway.marvel.com/v1/public');
  });

  it('should receive privateKey and publicKey as an option', () => {
    let marvel = new MarvelWrapper({
      privateKey: 'foo',
      publicKey: 'pool'
    });
    expect(marvel.publicKey).to.be.equal('pool');
    expect(marvel.privateKey).to.be.equal('foo');
  });
  describe('request method', () => {
    let stubedFetch;
    let promise;

    beforeEach( () => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach( () => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let marvel = new MarvelWrapper({});
      expect(marvel.request).to.have.exist;
    });

    it('should call fetch when request', () => {
      let marvel = new MarvelWrapper({
        privateKey: 'foo',
        publicKey: 'pool'
      });

      marvel.request('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with url passed and (publickey)', () => {
      let marvel = new MarvelWrapper({
        privateKey: 'foo',
        publicKey: 'pool'
      });

      marvel.request('url');
      let url = `url?ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

     it('should call fetch with url passed and (limit, publickey)', () => {
      let marvel = new MarvelWrapper({
        privateKey: 'foo',
        publicKey: 'pool',
        limit: 100
      });

      marvel.request('url');
      let url = `url?limit=100&ts=${marvel.ts}&apikey=${marvel.publicKey}&hash=${marvel.hash}`;
      expect(stubedFetch).to.have.been.calledWith(url);
    });

  });
});
