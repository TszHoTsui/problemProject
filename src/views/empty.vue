<script setup lang="ts"></script>

<template>
  <el-button type="primary" @click="$router.push('/empty')">Primary</el-button>
  <el-button type="warning">Warning</el-button>
  <el-tag>Tag 1</el-tag>
  <el-tag class="ml-2" type="success">Tag 2</el-tag>
  <el-tag class="ml-2" type="info">Tag 3</el-tag>
  <el-tag class="ml-2" type="warning">Tag 4</el-tag>
  <el-tag class="ml-2" type="danger">Tag 5</el-tag>
</template>

<style lang="less" scoped></style>
