import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

const PER_PAGE = 15;

let page = 1;
let query = '';
let totalHits = 0;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  event.preventDefault();

  query = event.currentTarget.elements.searchText.value.trim();

  if (!query) return;

  page = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    if (totalHits > PER_PAGE) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const loadedImages = page * PER_PAGE;

    if (loadedImages >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }

    const card = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: card.height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader();
  }
}