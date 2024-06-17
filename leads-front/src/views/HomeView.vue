<template>
  <div class="container">
    <div class="header">
      <h1>Сервис сделок</h1>
      <a-input-search
        placeholder="Поиск"
        style="width: 200px"
      ></a-input-search>
    </div>
    <s-table 
      :columns="columns" 
      :data-source="dataSource"
      :pagination="false"
      auto-header-height
    >
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.contacts }}
        </p>
      </template>
    </s-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      columns: [
        {title: 'Название', dataIndex: 'name', key: 'name'},
        {title: 'Бюджет', dataIndex: 'price', key: 'price'},
        {title: 'Статус', dataIndex: 'status', key: 'status'},
        {title: 'Ответственный', dataIndex: 'responsible', key: 'responsible'},
        {title: 'Дата создания', dataIndex: 'formattedCreatedAt', key: 'formattedCreatedAt'}
      ],
      dataSource: null,
    };
  },
  async mounted() {
    await this.getDataSource('');
  },
  methods: {
    async getDataSource(query) {
      const config = {
        headers: {
          Accept: "application/json"
        },
        params: {
          query: query && query.length >= 3 ? query : null
        }
      };
      try {
        const response = await axios.get("http://localhost:8000/api/leads", config);
        this.dataSource = response.data.map(lead => ({
          ...lead,
          formattedCreatedAt: this.formatDate(lead.created_at),
        }));
        console.log(this.dataSource);
      }
      catch (error) {
        console.error(error);
      }
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000); // умножаем на 1000, т.к. JS работает с миллисекундами
      return date.toLocaleString(); // возвращает дату в стандартном формате
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>

