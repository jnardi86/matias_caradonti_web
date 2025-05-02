const post = {
    name: "post",
    title: "Post del Blog",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Título",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
      },
      {
        name: "publishedAt",
        title: "Fecha de publicación",
        type: "datetime",
      },
      {
        name: 'mainImage',
        title: 'Imagen destacada',
        type: 'image',
        options: {
          hotspot: true, // Permite crop automático
        },
      },
      {
        name: "summary",
        title: "Resumen",
        type: "text",
      },
      {
        name: "body",
        title: "Contenido",
        type: "blockContent",
      },
    ],
  };
  
  export default post;
  