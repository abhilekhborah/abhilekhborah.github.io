---
title: "Music"
layout: gridlay
sitemap: false
permalink: /music/
---

<style>
img {
        max-width: 100%;
        height: auto;
    }
    .artist-name {
        font-size: 24px;
        font-weight: bold;
        padding-top: 20px;
    }
    .view-on-spotify {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: px;
        padding: 10px 20px;
        background: linear-gradient(145deg, #1db954, #169c46);
        color: white;
        text-decoration: none;
        border-radius: 10px;
        font-weight: bold;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        font-size: 14px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .view-on-spotify:hover {
        background: linear-gradient(145deg, #1ed760, #1db954);
        transform: translateY(-2px);
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
    }
    .view-on-spotify:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .spotify-logo {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        transition: all 0.3s ease;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    }
    .view-on-spotify:hover .spotify-logo {
        transform: scale(1.1) rotate(-5deg);
    }
    @media (max-width: 600px) {
        iframe {
            width: 100%;
        }
    }
    .loader {
      position: relative;
      width: 54px;
      height: 54px;
      border-radius: 10px;
      margin: 20px auto;
      padding: 10px;
    }
    .loader div {
      width: 8%;
      height: 24%;
      background: rgb(128, 128, 128);
      position: absolute;
      left: 50%;
      top: 30%;
      opacity: 0;
      border-radius: 50px;
      box-shadow: 0 0 3px rgba(0,0,0,0.2);
      animation: fade458 1s linear infinite;
    }
    @keyframes fade458 {
      from {
        opacity: 1;
      }
      to {
        opacity: 0.25;
      }
    }
    .loader .bar1 {
      transform: rotate(0deg) translate(0, -130%);
      animation-delay: 0s;
    }
    .loader .bar2 {
      transform: rotate(30deg) translate(0, -130%);
      animation-delay: -1.1s;
    }
    .loader .bar3 {
      transform: rotate(60deg) translate(0, -130%);
      animation-delay: -1s;
    }
    .loader .bar4 {
      transform: rotate(90deg) translate(0, -130%);
      animation-delay: -0.9s;
    }
    .loader .bar5 {
      transform: rotate(120deg) translate(0, -130%);
      animation-delay: -0.8s;
    }
    .loader .bar6 {
      transform: rotate(150deg) translate(0, -130%);
      animation-delay: -0.7s;
    }
    .loader .bar7 {
      transform: rotate(180deg) translate(0, -130%);
      animation-delay: -0.6s;
    }
    .loader .bar8 {
      transform: rotate(210deg) translate(0, -130%);
      animation-delay: -0.5s;
    }
    .loader .bar9 {
      transform: rotate(240deg) translate(0, -130%);
      animation-delay: -0.4s;
    }
    .loader .bar10 {
      transform: rotate(270deg) translate(0, -130%);
      animation-delay: -0.3s;
    }
    .loader .bar11 {
      transform: rotate(300deg) translate(0, -130%);
      animation-delay: -0.2s;
    }
    .loader .bar12 {
      transform: rotate(330deg) translate(0, -130%);
      animation-delay: -0.1s;
    }
</style>

<h2>My Originals</h2>

<p>I've always had a passion for playing and composing music! Started with playing the keyboard, and over time, this journey inspired me to release my original music. Here are a few of them! Hope you enjoy it! :)</p>

<div id="artist-profile"></div>

<div id="top-tracks"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    const clientId = 'c9ca16e31d504f98a046af2890e710a6';
    const clientSecret = '01ca332625004c37ad97cc09accc9489';
    const artistId = '0y1YkkoW5JitFA9Mc2UTqk';

    function createSpinner() {
        return $(`
            <div class="loader">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
                <div class="bar7"></div>
                <div class="bar8"></div>
                <div class="bar9"></div>
                <div class="bar10"></div>
                <div class="bar11"></div>
                <div class="bar12"></div>
            </div>
        `);
    }

    // Show spinner only for top tracks
    $('#top-tracks').append(createSpinner());

    function getAccessToken() {
        return $.ajax({
            url: 'https://accounts.spotify.com/api/token',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            data: {
                grant_type: 'client_credentials'
            }
        });
    }

    function getArtistProfile(token) {
        return $.ajax({
            url: `https://api.spotify.com/v1/artists/${artistId}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }

    function getArtistTopTracks(token) {
        return $.ajax({
            url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }

    getAccessToken().done(function(response) {
        const accessToken = response.access_token;
        
        getArtistProfile(accessToken).done(function(artist) {
            $('#artist-profile').html(`
                <img src="${artist.images[0].url}" alt="${artist.name}" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
                <h2 class="artist-name">ABHILEKH</h2>
            `);
        });

        getArtistTopTracks(accessToken).done(function(data) {
            let tracksHtml = '<h4>Top Tracks</h4><ul style="list-style-type: none; padding: 0;">';
            data.tracks.forEach(track => {
                tracksHtml += `
                    <li style="margin-bottom: 20px;">
                        <iframe src="https://open.spotify.com/embed/track/${track.id}" 
                                width="100%" 
                                height="80" 
                                frameborder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media">
                        </iframe>
                    </li>
                `;
            });
            tracksHtml += '</ul>';
            tracksHtml += `
                <button onclick="window.open('https://open.spotify.com/artist/0y1YkkoW5JitFA9Mc2UTqk', '_blank')" class="view-on-spotify">
                    <svg class="spotify-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#ffffff"/>
                    </svg>
                    Listen on Spotify
                </button>
            `;
            $('#top-tracks').html(tracksHtml);
        }).always(function() {
            // Hide spinner in top-tracks
            $('#top-tracks .loader').remove();
        });
    });
});
</script>