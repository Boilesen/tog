import ArticleCards from '../../Components/ArticleCards';

const Articles = {
  articles: [
    {
      imgSrc: '',
      title: 'Ola Mundo',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 1',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 2',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 2',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 2',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 2',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 2',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    },
    {
      imgSrc: '',
      title: 'Ola Mundo 3',
      creatorInfo: {
        name: 'nome',
        photo: 'photo.png',
        job: 'Manager Trainee',
        tags: ['Fun', 'Not Fun'],
        readingTime: '12 min.'
      }
    }
  ]
};

function Home() {
  return (
    <div className='row gx-5'>
      <div className='col'>
        <div className='row row-cols-2 g-4'>
          {Articles.articles.map((article) => {
            return (
              <div className='col'>
                <ArticleCards
                  imgSrc={article.imgSrc}
                  title={article.title}
                  creatorInfo={article.creatorInfo}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='col-auto'>
        <div className='sticky-top vh-100 d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-column gap-5'>
            <div className='d-flex gap-3 align-items-center'>
              <h3 className='square-center pb-3 border-bottom border-dark border-5'>01</h3>
              <div>
                <h6 className='m-0'>Emerging, identifying</h6>
                <h5 className='fw-bold'>Strategy</h5>
              </div>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <h3 className='square-center pb-3 border-bottom border-dark border-5'>02</h3>
              <div>
                <h6 className='m-0'>Emerging, identifying</h6>
                <h5 className='fw-bold'>Strategy</h5>
              </div>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <h3 className='square-center pb-3 border-bottom border-dark border-5'>01</h3>
              <div>
                <h6 className='m-0'>Emerging, identifying</h6>
                <h5 className='fw-bold'>Strategy</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
