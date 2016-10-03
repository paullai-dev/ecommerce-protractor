//  deBijenkorf.shop.pageObject.js
//  Created by Paul Lai on 01/10/2016.
//  Copyright (c)

'use strict';
  
var deBijenkorfshop = function() {
  //homepage selectors
  this.banner = element(by.css(".dbk-banner"));
  this.logo = element(by.css(".dbk-header--logo"));
  this.searchItems = element(by.css(".dbk-form--field"));
  this.searchButton = element(by.css(".dbk-icon-r_search"));

  //searchpage selectors
  this.productBreadcrumbs = element(by.css(".dbk-breadcrumb-group"));
  this.productRefinery = element(by.css(".dbk-refinery--list"));
  this.searchTerms = element(by.css(".lbl-search-term.formattext.text")); //CSS selectors works best
  this.selectItems = element(by.xpath('//li[2]/div/a/div/img')); //but xpath selectors works too
  this.selectSizes = element(by.xpath('//option[2]'));

  //productpage selectors
  this.toast = element(by.css(".dbk-notification--message"));  
  this.sizeInfo = element(by.css(".dbk-product-indicator--enriched-text"));
  this.forgotSize = element(by.css(".dbk-alert.dbk-alert_warning"));
  this.addtoFavorite = element(by.css(".select.dbk-form--input"));
  this.addtoBasket = element(by.css(".dbk-btn_primary"));

  //basket selectors
  this.openBasket = element(by.xpath('//div[5]/div/div/button'));
  this.basketInfo = element(by.css(".dbk-small"));
  this.emptyBasket = element(by.css(".ws-cart-remove-item"));
  this.basketCleared = element(by.css(".dbk-heading_h1"));
  
  this.selectProduct = function() {
	browser.driver.sleep(2000); // add sleep to circumvent test flakiness, works like a charm
    this.selectItems.click();
  };

  this.pickSize = function() {
    this.selectSizes.click();
  };
  
  this.addItems = function() {
    this.addtoBasket.click();
	browser.driver.sleep(2000); // add sleep to ensure enough time to wait for toast
  };

  this.removeItems = function() {
    this.emptyBasket.click();
	browser.driver.sleep(2000); // add sleep to wait for confirmation that the shopping basket has been emptied
  };
  
  this.goToBasket = function() {
    this.openBasket.click();
  };
      
  this.navigate = function () {
    browser.get('https://m.debijenkorf.nl/');
  };
  
  this.searchItemType = function() { //loop through one character at a time to avoid Angular's sendKeys limitation, this ensure it works everytime
	  var i;
	  var searchItemType = "jeans";
	  for(i = 0; i < searchItemType.length; i++){
	      this.searchItems.sendKeys(searchItemType.charAt(i));
	  }
  };
 
  this.search = function() {
    this.searchButton.click();
  };  
};

module.exports = deBijenkorfshop;