let arrayOfShiny = []
let arr = []
let n = null
let result = document.getElementById("arrayShiny")

const initialization = () => {
  arrayOfShiny = []
  arr = []
  n = null
  document.getElementById("arrayShiny").innerText = ""
}
const isInt = (n) => n % 1 === 0

const checkShinyProperty = (hashTable) => {
  Object.keys(hashTable).forEach((key) => {
    let newKey = key.split("").sort().join("")
    if (hashTable[newKey] === undefined) delete hashTable[key]
    else {
      if (hashTable[newKey] > n) arrayOfShiny.push(hashTable[newKey])
    }
  })
  return hashTable
}

const getDataFromForm = () => {
  initialization()
  arr = document
    .getElementById("arrOfNumbers")
    .value.split(",")
    .map((item) => {
      try {
        return Number(item.trim())
      } catch (e) {
        return null
      }
    })

  try {
    n = Number(document.getElementById("userNum").value.trim())
  } catch (e) {
    n = null
  }
  if (arr.length > 0 && n != null && n != NaN) {
    searchForShiny(arr, n)
  }
}
const searchForShiny = (arr, n) => {
  hashInt = {}
  hashFloat = {}

  arr.forEach((v) => {
    if (isInt(v)) {
      intKey = String(v)
      hashInt[intKey] = v
    } else {
      floatKey = String(v).replace(".", "")
      hashFloat[floatKey] = v
    }
  })
  checkShinyProperty(hashInt)
  checkShinyProperty(hashFloat)

  document.getElementById("arrayShiny").innerText = arrayOfShiny.slice(0, 99)
}

getDataFromForm()
