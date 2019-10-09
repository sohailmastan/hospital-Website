// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May" , "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
    datasets: [{
      data: [100, 50, 300, 400, 200, 400, 100, 200, 100, 300, 300, 100, 100],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#007bff', '#dc3545', '#ffc107', '#28a745' ,'#007bff', '#dc3545', '#ffc107', '#28a745' , '#ffc107'],
    }],
  },
});
