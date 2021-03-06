const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'EE' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('applications', [
    { name: 'lb1', templateName: 'LB1', path: 'applications/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'applications/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'applications/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'applications/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'applications/load-more' },
    { name: 'reskin', path: 'applications/reskin' },
  ])
  .setAliasAdUnits('industries', [
    { name: 'lb1', templateName: 'LB1', path: 'industries/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'industries/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'industries/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'industries/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'industries/load-more' },
    { name: 'reskin', path: 'industries/reskin' },
  ])
  .setAliasAdUnits('instrumentation', [
    { name: 'lb1', templateName: 'LB1', path: 'instrumentation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'instrumentation/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'instrumentation/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'instrumentation/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'instrumentation/load-more' },
    { name: 'reskin', path: 'instrumentation/reskin' },
  ])
  .setAliasAdUnits('resources', [
    { name: 'lb1', templateName: 'LB1', path: 'resources/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'resources/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'resources/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'resources/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'resources/load-more' },
    { name: 'reskin', path: 'resources/reskin' },
    { name: 'wa', path: 'resources/wa' },
  ])
  .setAliasAdUnits('test-issues-techniques', [
    { name: 'lb1', templateName: 'LB1', path: 'test-issues-techniques/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'test-issues-techniques/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test-issues-techniques/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test-issues-techniques/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test-issues-techniques/load-more' },
    { name: 'reskin', path: 'test-issues-techniques/reskin' },
  ]);

module.exports = config;
