'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {'title': 'Home',
    'sref': 'home',
    'link': '#/'
  },{'title': 'About Us',
    'sref': 'about',
    'link': '#/about'
  },{'title': 'Search',
    'sref': 'search',
    'link': '#/search'
  },{'title': 'Post Route Request',
    'sref': 'postRoute',
    'link': '#/postroute'
  },{'title': 'My Account',
    'sref': 'account',
    'link': '#/account'
  },{'title': 'Sponsor Directory',
    'sref': 'directory',
    'link': '#/directory'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('rescueRrApp')
  .controller('NavbarController', NavbarController);
