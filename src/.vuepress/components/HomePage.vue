<template>
    <div class="homepage">
      <!-- 头图轮播 -->
      <div class="carousel">
        <div class="carousel-wrapper">
          <img :src="images[currentIndex]" alt="轮播图片" class="carousel-image" />
        </div>
        <button @click="prev" class="carousel-button prev-button">‹</button>
        <button @click="next" class="carousel-button next-button">›</button>
      </div>
      
      <!-- 实验室介绍内容 -->
      <div class="content">
        <h2>About the DS Lab</h2>
        <p>
          Welcome to the DS lab at University of Connecticut Health Center (UConn Health)! We are looking for motivated PhD students, Postdocs, and Undergraduate Interns to join our team (see Openings)!
        </p>
        <p>
          The DS Lab (Dongyuan Song or Data Science) studies various data science problems in genomics. Our research focuses on developing novel computational tools for analyzing high-throughput “omics” data, especially for single-cell and spatial omics. By integrating statistical modeling, machine learning, and bioinformatics, the lab aims to provide a more rigorous interpretation of cellular variation from different biological systems.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Homepage',
    data() {
      return {
        // 请确保将下面的图片路径替换成你实际的图片地址
        images: [
          'https://dsong-lab.github.io/images/slider/uconnhealth.jpg',
          'https://dsong-lab.github.io/images/slider/building.jpg',
          'https://dsong-lab.github.io/images/slider/Department.jpg',
          'https://dsong-lab.github.io/images/slider/scDesign3.jpg'
        ],
        currentIndex: 0,
        timer: null
      }
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      this.stopAutoSlide();
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      startAutoSlide() {
        this.timer = setInterval(() => {
          this.next();
        }, 3000); // 每3秒自动切换图片
      },
      stopAutoSlide() {
        clearInterval(this.timer);
      }
    }
  }
  </script>
  
  <style scoped>
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* 轮播样式 */
  .carousel {
    position: relative;
    width: 100%;
    max-width: 800px;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    width: 100%;
    height: 400px;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    border: none;
    color: #fff;
    font-size: 2em;
    cursor: pointer;
    padding: 0 10px;
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  
  /* 内容样式 */
  .content {
    max-width: 800px;
    padding: 20px;
  }
  
  .content h2 {
    margin-top: 20px;
    font-size: 2em;
  }
  
  .content p {
    line-height: 1.6;
    margin: 10px 0;
  }
  </style>
  