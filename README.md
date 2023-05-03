# reduxtoolkit

```
npx create-react-app .
```

```
yarn add @reduxjs/toolkit react-redux
```

# src/redux/store.js

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

# index.js

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

```

# redux/todos/todosSlice.js

```
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todos",
    initialState:{
        items:[]
    },
    reducers:{},
})

```

yukarıdaki kodta neler yaptık:
Redux Toolkit kütüphanesi kullanılarak bir todosSlice adında bir Redux slice oluşturduk.

Bir slice, Redux mağazasında belirli bir durumu ve o durumla ilgili işlemleri yöneten bir parçadır.

createSlice fonksiyonu, bir slice oluşturmak için kullanılır ve bir obje döndürür. Bu obje, slice'ın durumunu ve durumla ilgili işlemleri tanımlayan reducer'ları içerir.

todosSlice objesi şu özellikleri içerir:

name: slice'ın adı. Bu, Redux Toolkit tarafından kullanılmaz ve sadece slice'ı tanımlamak için kullanılır.
initialState: slice'ın başlangıç durumu. Burada, slice'ın sadece bir öğeler dizisi içerdiği boş bir durum tanımlanmıştır.
reducers: slice'ın işlemlerini tanımlayan bir nesne. Henuz bir işlem tanımlamadık.
Bu örnek kod, henüz herhangi bir işlevsellik eklemeyen temel bir slice tanımlamak için kullanılabilir. Daha sonra, reducers nesnesi içindeki fonksiyonlar, slice'ın durumunu güncellemek için kullanılabilir.

# redux/todos/todosSlice.js

```
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todos",
    initialState:{
        items:[]
    },
    reducers:{},
});

export default todosSlice.reducer;
```

```
export default todosSlice.reducer;
```

komutu ile <todosSlice> ın reducer ını dışa aktarmış oldum.
bunu

Bu kod, Redux Toolkit'in createSlice fonksiyonunu kullanarak bir todos slice'ı oluşturur. Bu slice, Redux store'unda state yönetimi için kullanılır.

createSlice fonksiyonu, bir slice için bir isim ve bir başlangıç durumu belirtir. Bu slice içindeki veriler, slice adına özgü eylemler tarafından değiştirilebilir.

Bu örnekte, todos slice'ı, boş bir dizi (items: []) ile başlatılır. Ancak, slice için eylemler tanımlanmamıştır (reducers: {}). Eylemler, slice içindeki state'i değiştirmek için kullanılabilir.

En son olarak, todosSlice.reducer export edilir. Bu, slice'ın reducer fonksiyonunu export eder ve Redux store'unun state yönetiminde kullanılabilir.

# src/redux/store.js burada kullanacağım şöyleki;

```
import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todos/todosSlice'


export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
})
```

Bu kod, Redux Toolkit'in configureStore fonksiyonunu kullanarak bir Redux store oluşturur.

configureStore fonksiyonu, Redux store için ayarları yapılandırmak ve gerekli middleware'leri eklemek için kullanılır. Bu örnekte, reducer özelliği kullanılarak, store'a todos slice'ı eklenir.

todosSlice burada bir reducer fonksiyonudur ve slice'ın state yönetimini gerçekleştirir. reducer özelliğine eklemek, todosSlice'ın store'daki ilgili slice ile bağdaştırılmasını sağlar.

Sonuç olarak, store değişkeni, configureStore fonksiyonundan dönen bir Redux store nesnesidir. Bu store, uygulamanın herhangi bir yerinde kullanılabilir ve todos slice'ındaki state yönetimi için kullanılabilir.

şimdi ben gitip her hangi bir componentte bu initial stateteki verileri kullanayım.

```
import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todos",
    initialState:{
        items:[]
    },
    reducers:{},
});

export default todosSlice.reducer;
```

buraya erişebiliyormuyum görmem lazım
be bu listelemeıyi nered yapacağım hangi komponentte yapacağım.Content.js içerisinde yapacağım
tanımlamış olduğum bir state erişim sağlayabilmek için
<react-redux> altındaki <useSelector> ismindeki hookunda kullanmam gerekecek. birde yazmış olduğum Slice i içeriye alacağım bunu niçin alıyorum bir even dispach edeceğim zaman kullanacağım için
şimdi

# component/Content.js

içerisine

```
import { useSelector } from "react-redux";

```

import edelim.ve

```
const items = useSelector(state=>state.todos.items);
  console.log(items)
```

Bu kod, React uygulamasında Redux store'daki todos slice'ındaki items state'ini seçmek için useSelector hooks'unu kullanır.

useSelector hooks'u, Redux store'daki belirli bir state'i seçmek için kullanılır. Hooks'a bir fonksiyon geçilir ve bu fonksiyon, seçilen state'in kullanılacağı React bileşenindeki props gibi bir argüman olarak kullanılır.

Burada, fonksiyon, state argümanını alır ve state.todos.items özelliğini seçer. Yani items değişkeni, Redux store'daki todos slice'ındaki items state'ini seçer.

Sonrasında, seçilen items değişkeni console.log() fonksiyonuyla konsola yazdırılır. Bu, items değişkeninin store'da bulunan değerini görmenizi sağlar.

# component/Content.js

```
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";

const Content = () => {
  const items = useSelector(state=>state.todos.items);
  console.log(items)
  return (
    <>
    <Box sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-between",
        alignItems:"flex-start",
    }}>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel label="" control={<Checkbox color="primary" />} />
        <Typography variant="body1" color="initial">
          learn react
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel label="" control={<Checkbox color="primary" />} />
        <Typography variant="body1" color="initial">
         learn HTML
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel label="" control={<Checkbox color="primary" />} />
        <Typography variant="body1" color="initial">
            learn CSS
        </Typography>
      </Box>
      </Box>
    </>
  );
};

export default Content;
```

bunu denemek için

# redux/todos/todosSlice.js

initial stateleri giriyorum

```
import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn polinomlar",
      },
      {
        id: "2",
        title: "learn algoritma",
      },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
```

![](./fotos/1.jpg)

girdiğimiz initial stateleri konsolda gördük.
artık ben bunları ekrana yazdırabilirim

# component/Content.js

şu şekilde değiştiriyorum.

```

import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";

const Content = () => {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControlLabel label="" control={<Checkbox color="primary" />} />
            <Typography variant="body1" color="initial">
              {index + 1} - {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Content;


```

>Bu bileşen, useSelector hooks'unu kullanarak Redux store'dan todos slice'ındaki items state'ini seçer ve her bir öğeyi checkbox ve metin etiketi ile birlikte görüntüler.

>Box bileşeni, MUI kütüphanesinden ithal edilir ve sayfada düzenleme için kullanılır. Box bileşeni, Flexbox özellikleri ile birlikte gelir.

>Bileşen, items.map() fonksiyonunu kullanarak items dizisindeki her bir öğeyi render eder. Her öğe, bir FormControlLabel bileşeni içinde bir Checkbox ve bir Typography etiketi ile sarılır.

>Typography bileşeni, MUI kütüphanesinden gelen bir bileşendir ve metinleri düzenlemek için kullanılır. Burada, item.id ve item.title özellikleri Typography etiketi içinde görüntülenir.

>Sonuç olarak, Content bileşeni, items dizisindeki öğeleri checkbox ve metin etiketiyle görüntüler ve kullanıcının bu öğeleri seçmesine olanak tanır.

>bu noktada map() fonksiyonundan mahsetmek istiyorum.

>map() fonksiyonunun ikinci parametresi olan index, döngü içinde bulunan öğenin dizindeki sırasını belirtir. Yani, items dizisindeki her bir öğenin kaçıncı sırada olduğunu temsil eder.

>Bu parametre, özellikle React bileşenlerinde birden çok öğe render etmek için key prop'unu belirlemek için kullanılır. key prop, React tarafından her bir öğenin benzersiz bir şekilde tanımlanması için gereklidir ve performansı artırmak için kullanılır.

>Örneğin, key prop'u, items.map() fonksiyonunun döndürdüğü bileşenlerin her birine atanabilir:

```
{items.map((item, index) => (
  <Box key={index}>
    ...
  </Box>
))}

```

Ancak, key olarak index kullanmak, performans sorunlarına neden olabileceğinden pek önerilmez. Eğer items dizisindeki öğelerin kendileri benzersiz bir özellikleri yoksa, bir benzersiz kimlik değeri verilmesi daha uygun olacaktır.

buraya kadar yapılanları özetleyelim:

Baştan başlayalım, böylece bütün dersleri pekiştiririz. Kafanızı karıştıracak bir nokta olmasını istemiyorum, o yüzden bu derste yaptığımız şeyleri açıklayayım. İlk olarak,

```
yarn add @reduxjs/toolkit react-redux
```
komutu ile işe koyulduk ve ardından src/redux/store.js dosyasının içinde store ımızı luşturduk. index.js içerisinde bir "provider" (sağlayıcı) tanımlaması yaparak store parametre olarak geçtik ve <App/>imizi <Provider> ile sarmalladık. sonra bir slice ihtiyacımız vardı.
onuda src/redux/todos/todosSlice.js dosyasının içesinde ouşturduk todos la alakalı elemanları tutabileceğimiz.reducerlarımızı yazabileceğimiz bir slice oluşturmamız gerekiyor.

````
import { createSlice } from "@reduxjs/toolkit";
```` 
bunu kullanarak

üç farrlı key ile 
````
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn polinomlar",
      },
      {
        id: "2",
        title: "learn algoritma",
      },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
```` 
bunları oluşturduk

bunları kullanırkende <useSelector> isimli hook u kullandık

# yeni todo elemanı eklemek


şimdide input umuzu kullanarak başka kayıtlar yapmaya çalişalım.
 form submit edildiği anda eklenmesini bekliyoruz.
 reducer kısmında yeni bir tanım yapacağız.burada yazacağımız fonsiyonuda gidip Form.js form componentinde kullanacağız.dispatch ederek kullanacağız.

 # redux/todos/todosSlice.js
 ````
 import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn polinomlar",
      },
      {
        id: "2",
        title: "learn algoritma",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {addTodo} = todosSlice.actions;

export default todosSlice.reducer;
````

bu slice ta bir addTodo adındabir reducer tanımdık. burada"addTodo" eylemi tanımlanmıştır. Bu eylem, state içindeki "items" dizisine bir öğe ekler.

Son olarak, todosSlice.actions nesnesi, slice için tanımlanmış olan eylemleri içerir. Burada, sadece "addTodo" eylemi tanımlanmıştır.

Bu slice, birçok parçadan oluşan bir Redux mağazasında kullanılabilir. "addTodo" eylemi çağrıldığında, state içindeki "items" dizisi güncellenir ve yeni bir öğe eklenir.
# components/Form.js
````
import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [title, setTitle] = useState('')
  console.log(title)

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), title, completed: false }))
    setTitle('');
  };
  return (
   

    <>
      <form onSubmit={handleSubmit}>
      <TextField
     
        id="input-with-icon-textfield"
        label="todos"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="what needs to be done"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </form>
    </>
  );
};

export default Form;
````
Bu kod, MUI TextField bileşenini kullanarak bir form oluşturur. Bu form, yeni bir todo öğesi eklemek için kullanılır.

Form bileşeni, useState hook'unu kullanarak bir title adında bir değişken oluşturur. Bu değişken, kullanıcının girdiği todo öğesinin başlığını tutar. console.log fonksiyonu, title değişkeninin değerini konsolda görüntüler.

Form bileşeni, useDispatch hook'unu kullanarak dispatch adında bir değişken oluşturur. Bu değişken, Redux mağazasındaki addTodo işlevini çağırmak için kullanılır.

handleSubmit fonksiyonu, form gönderildiğinde çağrılır. Bu fonksiyon, addTodo işlevini kullanarak yeni bir todo öğesi ekler. Bu işlem, title değişkeninin değerini kullanır ve tamamlanmamış olarak ayarlanan bir rastgele id değeri oluşturur. Son olarak, title değişkeninin değeri temizlenir ve kullanıcıya yeni bir todo öğesi eklemek için hazır bir form gösterilir.

TextField bileşeni, kullanıcıdan todo öğesi başlığı girmesini bekler ve bu girdiyi title değişkenine aktarır. Ayrıca, InputAdornment ve IconButton bileşenlerini kullanarak açılır menüyü ve ok simgesini görüntüler.

Bu bileşen, uygulamanın geri kalanında kullanılabilir ve yeni todo öğeleri eklemek için kullanılabilir.
# Toggle İşlemlerinin Yapılması
bir item ı tamamlandı olarak nasıl işaretleriz ona bakacağız
toggle active se de active de active ise active şeklinde birşey..
o zaman slice ımıza gidelim yeni bir reducer ekleyelim

 # redux/todos/todosSlice.js

 ````
 import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn polinomlar",
        completed: false,
      },
      {
        id: "2",
        title: "learn algoritma",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
  },
});

export const { addTodo, toggle } = todosSlice.actions;

export default todosSlice.reducer;
````
toggle action türü: Bu action, bir todo öğesinin tamamlanma durumunu değiştirmek için kullanılır. action.payload üzerinden değiştirilmek istenen todo öğesinin id değerine erişilir. state.items dizisinde, find() metodunu kullanarak ilgili todo öğesini buluruz. Ardından, todo öğesinin completed (tamamlanma durumu) alanını tersine çevirerek tamamlanma durumunu değiştiririz. Böylece, ilgili todo öğesinin tamamlanma durumu güncellenmiş olur.

# src/components/Content.js
````
import React from "react";

import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/todos/todosSlice";

const Content = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  const handleCheckboxChange = (id) => {
    dispatch(toggle({ id }));
  };

  return (
    <>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={item.completed}
            onChange={() => handleCheckboxChange(item.id)}
            inputProps={{
              "aria-label": "controlled",
            }}
          />

          <Typography
            variant="body1"
            color="initial"
            sx={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {index + 1} - {item.title}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default Content;
````

# silme işlemleri

öncelikle slice ımızı tanımladık
 # redux/todos/todosSlice.js

 
````
import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn polinomlar",
        completed: false,
      },
      {
        id: "2",
        title: "learn algoritma",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },

    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addTodo, toggle, destroy } = todosSlice.actions;

export default todosSlice.reducer;
````

destroy action türü, bir todo öğesini silmek için kullanılır. action.payload üzerinden silinmek istenen todo öğesinin id değerine erişilir. state.items dizisinde, filter() metodu kullanılarak silinmek istenen todo öğesinin filtrelenmiş bir kopyası oluşturulur. filter() metodu, bir dizi üzerinde belirli bir koşulu sağlayan elemanları filtreler ve yeni bir dizi döndürür.

Burada, state.items dizisindeki todo öğeleri üzerinde item.id !== id koşulu kullanılarak, silinmek istenen todo öğesinin id değerine eşit olmayan todo öğeleri filtrelenir ve filtered adlı yeni bir dizi oluşturulur. Daha sonra, state.items dizisi filtered dizisi ile güncellenir, böylece silinmek istenen todo öğesi state.items dizisinden çıkarılır.
# src/components/Content.js

````
import React from "react";

import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";

const Content = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  const handleCheckboxChange = (id) => {
    dispatch(toggle({ id }));
  };
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure ")) {
      dispatch(destroy(id));
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "3px solid black",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
              inputProps={{
                "aria-label": "controlled",
              }}
            />

            <Typography
              variant="body1"
              color="initial"
              sx={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {index + 1} - {item.title}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDestroy(item.id)}
          >
            sil
          </Button>
        </Box>
      ))}
    </>
  );
};

export default Content;
````

✅

