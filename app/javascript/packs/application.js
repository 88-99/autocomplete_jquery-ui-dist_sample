import 'bootstrap';
import $ from 'jquery'; // 追記
import '../stylesheets/application';

global.$ = $　// 追記
global.jQuery = $ // 追記
// ここから
require('jquery-ui-dist/jquery-ui');
// jquery-ui theme
require.context('file-loader?name=[path][name].[ext]&context=node_modules/jquery-ui-dist!jquery-ui-dist', true,    /jquery-ui\.css/ );
require.context('file-loader?name=[path][name].[ext]&context=node_modules/jquery-ui-dist!jquery-ui-dist', true,    /jquery-ui\.theme\.css/ );
// ここまで追記

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

// ここから
$(function(){

  $('#product_name').autocomplete({
      source: ["ActionScript",
          "Bootstrap",
          "C",
          "C++",
          "Ecommerce",
          "Jquery",
          "Groovy",
          "Java",
          "JavaScript",
          "Lua",
          "Perl",
          "Ruby",
          "Scala",
          "Swing",
          "XHTML"]
  });

});
// ここまで追記

Rails.start()
Turbolinks.start()
ActiveStorage.start()
