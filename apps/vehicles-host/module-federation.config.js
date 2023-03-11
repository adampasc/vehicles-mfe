const defaultAngularMfSharingConfig = { singleton: true, strictVersion: true, requiredVersion: '>=15.0.0' }
const sharedAngularPackages = {
  '@angular/core': defaultAngularMfSharingConfig,
  '@angular/common': defaultAngularMfSharingConfig,
  '@angular/router': defaultAngularMfSharingConfig,
  '@angular/common/http': defaultAngularMfSharingConfig,
  '@angular/compiler': defaultAngularMfSharingConfig,
  '@angular/material': defaultAngularMfSharingConfig,
  '@angular/forms': defaultAngularMfSharingConfig,
  '@angular/cdk': defaultAngularMfSharingConfig,
  '@angular/platform-browser-dynamic': defaultAngularMfSharingConfig,
};


module.exports = {
  name: 'vehicles-host',
  remotes: ['feature-b'],
  shared: (name, config) => {
    const sharedPackage = Object.entries(sharedAngularPackages).find(([pkg]) => new RegExp(pkg).test(name));
    if (sharedPackage) {
      return sharedPackage[1];
    }
    return false;
  },
};
