// deBijenkorf.shop.spec.js
//  Created by Paul Lai on 01/10/2016.
//  Copyright (c)

var deBijenkorfshop = require('../pages/deBijenkorf.shop.pageObject.js');

beforeEach(function () {
	  isAngularSite(false); //flagged to prevent interference with Protractor's bootstrapping on non-angular pages
    });

describe('de Bijenkorf homepage', function() {
	  it('should open de Bijenkorf homepage', function() {
		var page = new deBijenkorfshop();
		page.navigate();
	  });

describe('de Bijenkorf title', function() {
      it('should have a title', function() {
	  	var page = new deBijenkorfshop();
    	expect(browser.driver.getTitle()).toEqual('de Bijenkorf | Ontdek de nieuwe collectie');	
	});

describe('de Bijenkorf logo', function() {
	   it('should have de Bijenkorf logo', function() {
		 var page = new deBijenkorfshop();
		 expect(page.logo.isDisplayed()).toBe(true);
		 expect(page.productBreadcrumbs.isPresent()).toBe(false); //make sure breadcrumbs is not present at initial load
		 });
	});

describe('de Bijenkorf jeans', function() {
	  it('should look for jeans', function() {
		var page = new deBijenkorfshop();
		expect(page.banner.isPresent()).toBe(true); //make sure the banner is present at the homepage
		page.searchItemType();
		page.search();
		});
	});

describe('de Bijenkorf results page', function() {
	  it('should retrieve jeans', function() {
		var page = new deBijenkorfshop();
		expect(page.banner.isPresent()).toBe(false); //make sure the banner is not present outside the homepage
		expect(page.productBreadcrumbs.isPresent()).toBe(true); //make sure breadcrumbs is present in results page
		expect(page.searchTerms.getText()).toEqual("'JEANS'"); //make sure we looked for a pair of jeans
		});
	  });

describe('de Bijenkorf items list', function() {
		it('should open second item on list', function() {
		  var page = new deBijenkorfshop();
		  page.selectProduct();
		  expect(page.productRefinery.isPresent()).toBe(false); //make sure the product categories is not present within item page
		  expect(page.sizeInfo.getText()).toEqual("Deze maat valt normaal");
		  });
	  });

describe('fail add to basket', function() {
	  	it('should not add item to basket', function() {
	  	  var page = new deBijenkorfshop();
	  	  page.addItems();
	  	  expect(page.forgotSize.getText()).toEqual("Kies eerst een maat"); //make sure size needs to be selected before items can be added to basket
	  	  });
	  });
		  
describe('add to basket', function() {
		it('should add item to basket', function() {
		  var page = new deBijenkorfshop();
		  page.pickSize();
		  page.addItems();
		  expect(page.toast.getText()).toEqual("Dit artikel is toegevoegd aan uw winkelmand"); //make sure toast message is displayed after item is added
		  });
	  });

describe('go to basket', function() {
		it('should go to basket', function() {
		  var page = new deBijenkorfshop();
		  page.goToBasket();
		  expect(page.addtoFavorite.isPresent()).toBe(false); //make sure add to favorite is not present in the shopping cart
		  expect(page.basketInfo.getText()).toContain("1 artikel"); //make sure 1 item was added to the shopping cart
		  });
	  });
  });

describe('empty the basket', function() {
		it('should remove the item', function() {
		  var page = new deBijenkorfshop();
		  page.removeItems();
		  expect(page.basketCleared.getText()).toEqual("UW WINKELMAND IS MOMENTEEL LEEG"); //make sure cart was emptied and a message that confirms it, case sensitive
		  });
	  });
});