$(document).ready(function() {
    function updateColor() {
      var redValue = $('#redRange').val();
      var greenValue = $('#greenRange').val();
      var blueValue = $('#blueRange').val();
  
      $('#redInput').val(redValue);
      $('#greenInput').val(greenValue);
      $('#blueInput').val(blueValue);
  
      var rgbColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
      $('.color-preview').css('background-color', rgbColor);
  
      var hexColor = rgbToHex(redValue, greenValue, blueValue);
      $('#hexValue').val(hexColor);
    }
  
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
  
    function rgbToHex(r, g, b) {
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    $('#redRange, #greenRange, #blueRange').on('input', updateColor);
    
    $('#redInput, #greenInput, #blueInput').on('input', function() {
      var redValue = parseInt($('#redInput').val());
      var greenValue = parseInt($('#greenInput').val());
      var blueValue = parseInt($('#blueInput').val());
  
      // Ensure values are within valid range
      redValue = Math.min(255, Math.max(0, redValue));
      greenValue = Math.min(255, Math.max(0, greenValue));
      blueValue = Math.min(255, Math.max(0, blueValue));
  
      $('#redRange').val(redValue);
      $('#greenRange').val(greenValue);
      $('#blueRange').val(blueValue);
  
      updateColor();
    });
  
    $('#colorPicker').on('input', function() {
      var hexColor = $(this).val();
      var rgbColor = hexToRgb(hexColor);
      
      $('#redRange').val(rgbColor.r);
      $('#greenRange').val(rgbColor.g);
      $('#blueRange').val(rgbColor.b);
  
      $('#redInput').val(rgbColor.r);
      $('#greenInput').val(rgbColor.g);
      $('#blueInput').val(rgbColor.b);
  
      $('.color-preview').css('background-color', hexColor);
      $('#hexValue').val(hexColor);
    });
  
    function hexToRgb(hex) {
      hex = hex.replace(/^#/, '');
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;
      return { r: r, g: g, b: b };
    }
  });
  