module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      await strapi.entityService.create('api::service.service', {
        data: {
          name: `Default Service for ${result.username}`,
          duration: 30,
          business_id: 1,
          category_id: 1,
          user: result.id,
        },
      });
    },
  };
  