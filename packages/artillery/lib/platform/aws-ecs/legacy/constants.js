const DEFAULT_IMAGE_TAG = '2b219c63c66fde76ea810843e372ec4eaa4e6da7';

module.exports = {
  ARTILLERY_CLUSTER_NAME: 'artilleryio-cluster',
  TASK_NAME: 'artilleryio-loadgen-worker',
  SQS_QUEUES_NAME_PREFIX: 'artilleryio_test_metrics',
  S3_BUCKET_NAME_PREFIX: 'artilleryio-test-data',
  LOGGROUP_NAME: 'artilleryio-log-group',
  IMAGE_VERSION: process.env.ECR_IMAGE_VERSION || DEFAULT_IMAGE_TAG,
  WAIT_TIMEOUT:
    typeof process.env.ECS_WAIT_TIMEOUT === 'undefined'
      ? 600
      : parseInt(process.env.ECS_WAIT_TIMEOUT, 10),
  TEST_RUNS_MAX_TAGS: parseInt(process.env.TEST_RUNS_MAX_TAGS, 10) || 8
};
