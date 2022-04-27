<template>
  <div class="generator">
      <div class="generator__btn">
        <button @click="generateData">Сгенерировать таблицу</button>
      </div>
      <div class="generator__table">
          <div class="row row__main">
              <div>Наименование</div>
              <div>Цена</div>
              <div>Количество</div>
              <div>Стоимость</div>
          </div>
          <div v-if="generated">
              <div class="row row__second" v-for="(item, index) in this.fieldName" :key=index>
                  <div>{{this.fieldName[index]}}</div>
                  <div>{{this.fieldPrice[index]}}</div>
                  <div>{{this.fieldCount[index]}}</div>
                  <div>{{this.fieldTotalPrice[index]}}</div>
              </div>
              <div>
                  <h2>Итоговая стоимость:</h2>
                  <span>{{this.finalPrice.toFixed(2)}}</span>
              </div>
          </div>
         <div class="no-data" v-else>
             Данные не сгенерированы
         </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Generator',
    data(){
        return{
            generated: false,
            fieldName: [],
            fieldPrice: [],
            fieldCount: [],
            fieldTotalPrice: [],
            finalPrice: 0,
            alphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
        }
    },
    methods: {
        generateData() {
            this.clearData()
            this.generateFieldName()
            this.getRandomFloat(0.01, 1000.00)
            this.getRandomFloat(1, 100, false)
            this.getTotalPrice()
            this.generated = true;
        },
        clearData(){
            this.fieldName = []
            this.fieldPrice = []
            this.fieldCount = []
            this.fieldTotalPrice = []
        },
        generateFieldName(){
            for(let j = 0; j < 50; j++){
                let newStr = ''
                for (let i = 0; i < 5; i++){
                    newStr += this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length))
                }
                this.fieldName.push(newStr)
            }
        },
        getRandomFloat(min, max, float = true) {
            if(float){
                for (let i = 0; i < 50; i++){
                    this.fieldPrice.push((Math.random() * (max - min) + min).toFixed(2))
                }
            } else {
                for (let i = 0; i < 50; i++){
                    this.fieldCount.push(Math.round(Math.random() * (max - min) + min))
                }
            }
        },
        getTotalPrice(){
            for (let i = 0; i < 50; i++){
                this.fieldTotalPrice.push((this.fieldPrice[i] * this.fieldCount[i]).toFixed(2))
                this.finalPrice += Number(this.fieldPrice[i] * this.fieldCount[i])
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
    .generator{
        &__btn{
            margin-bottom: 50px;
        }
        &__table{
            border: 1px solid gray;
            border-radius: 8px;
            padding: 30px;
            width: 80%;
            margin: 0 auto;
        }
    }
    .row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        &__main{
            font-size: 24px;
            font-weight: bold;
            border: 1px solid black;
            div{
                width: 270px;
                padding: 10px 50px;
                &:not(:first-child){
                    border-left: 1px solid black;
                }
                &:not(:last-child){
                    border-right: 1px solid black;
                }
            }
        }
        &__second{
            div{
                width: 270px;
                padding: 10px 50px;
            }
        }
    }
    .no-data{
        font-size: 30px;
        font-weight: bold;
        padding: 50px;
    }
</style>
