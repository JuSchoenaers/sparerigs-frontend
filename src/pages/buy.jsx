


import getArticles from '@/app/api/items';
import { Suspense } from 'react';

const articles = wrapPromise(getArticles())

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function Articles(){
  const data = articles.read();
    return (
      <div className='flex flex-row gap-8 flex-wrap'>
        {
          data.map(art=>(
          <div key={art.id} className='px-3 py-2 rounded-md h-min bg-tertiary-900'>
            <img className='max-w-56' src={art.gallery[0].image}></img>
            {art.model}
          </div>
        ))
        }
      
      </div>
    )
}


export default function Buy() {

  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading</div>}>
        <Articles />
      </Suspense>
    </div>

  );
}