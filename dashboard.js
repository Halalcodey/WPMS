// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  const navOptions = document.querySelectorAll('.nav-option'); // Navigation menu items
  const sections = document.querySelectorAll('.section'); // Sections to toggle display
  const logoutOption = document.querySelector('.logout'); // Logout menu item (add class 'logout' to your logout button in HTML)

  // Hide all sections initially
  sections.forEach(sec => sec.style.display = 'none');

  // Set the default navigation option
  const defaultNavOption = navOptions[0];
  defaultNavOption.classList.add('active');

  // Display the default section
  const defaultSectionId = defaultNavOption.querySelector('h3').innerText.toLowerCase().replace(' ', '-');
  const defaultSection = document.getElementById(defaultSectionId);
  if (defaultSection) {
    defaultSection.style.display = 'block';
  }

  // Add click event listeners to all nav options
  navOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove 'active' class from all nav options
      navOptions.forEach(opt => opt.classList.remove('active'));

      // Add 'active' class to the clicked option
      option.classList.add('active');

      // Hide all sections
      sections.forEach(sec => sec.style.display = 'none');

      // Get the ID of the target section from the clicked option
      const sectionId = option.querySelector('h3').innerText.toLowerCase().replace(' ', '-');
      const targetSection = document.getElementById(sectionId);

      // Display the target section if it exists
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });

  // Logout functionality
  if (logoutOption) {
    logoutOption.addEventListener('click', () => {
      // Redirect to the login page after logout
      window.location.href = '/req/login';
    });
  }
});






// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [120, 95, 80, 60, 45],
      name: 'Metrics',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Ticket Sales', 'Visitors', 'Food Sales', 'Gift Shop Sales', 'Feedbacks'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Daily Visitors',
      data: [200, 250, 300, 350, 400, 450, 500],
    },
    {
      name: 'Total Ticket Revenue',
      data: [3000, 4000, 4500, 5000, 6000, 7000, 8000],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Daily Visitors',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Revenue ($)',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();





// General function to toggle form visibility
function toggleFormVisibility(buttonId, formId, cancelBtnId = null) {
    const formCard = document.getElementById(formId);
    const button = document.getElementById(buttonId);
    const cancelButton = cancelBtnId ? document.getElementById(cancelBtnId) : null;

    // Initially hide the form (already set in HTML)
    formCard.style.display = "none";

    // Add a click event listener to the button
    button.addEventListener("click", () => {
      // Toggle the visibility of the form
      if (formCard.style.display === "none" || formCard.style.display === "") {
        formCard.style.display = "block"; // Show the form
      } else {
        formCard.style.display = "none"; // Hide the form
      }
    });

    // If there is a cancel button, add a click event listener to hide the form
    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
        formCard.style.display = "none"; // Hide the form when "Cancel" is clicked
      });
    }
  }

  // Call the function for each form
  toggleFormVisibility("book-new-ticket-btn", "ticket-form-card", "cancel-btn");
  toggleFormVisibility("add-new-ride-btn", "ride-form-card", "ride-cancel-btn");
  toggleFormVisibility("add-new-user-btn", "user-form-card", "user-cancel-btn");
  toggleFormVisibility("add-sales-report-btn", "sales-report-form-card");
  toggleFormVisibility("add-pricing-btn", "pricing-form-card", "pricing-cancel-btn");




  let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
  
  menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
  });

document.addEventListener("DOMContentLoaded", () => {

  const apiEndpoint = "http://localhost:8080/user";
  const customerTableBody = document.querySelector("#customer-management tbody");

  // Popup form elements
  const popupForm = document.getElementById("popupForm");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const saveBtn = document.getElementById("saveBtn");

  // Fetch customer details from the API
  async function fetchCustomerDetails() {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch customer data");
      }

      const customers = await response.json();
      customerTableBody.innerHTML = "";

      customers.forEach((customer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${customer.userId}</td>
          <td>${customer.userName}</td>
          <td>${customer.age}</td>
          <td>${customer.contactNumber}</td>
          <td>${customer.email}</td>
          <td>
            <button class="edit-btn" onclick="editCustomer('${customer.id}', '${customer.userName}', '${customer.age}', '${customer.contactNumber}', '${customer.email}')">Edit</button>
            <button class="delete-btn" onclick="deleteCustomer('${customer.id}', '${customer.userId}')">Delete</button>
          </td>
        `;
        customerTableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }

  // Open the popup form to edit the customer
  window.editCustomer = function(id, userName, age, contactNumber, email) {
    // Populate the popup form fields with the existing customer data
    document.getElementById("editName").value = userName;
    document.getElementById("editAge").value = age;
    document.getElementById("editContactNumber").value = contactNumber;
    document.getElementById("editEmail").value = email;

    // Show the popup
    popupForm.style.display = "flex";

    // Save the updated customer when the "Save" button is clicked
    saveBtn.onclick = () => {
      saveCustomer(id);
    };
  };

  // Save the updated customer
  async function saveCustomer(id) {
    const name = document.getElementById("editName").value;
    const age = document.getElementById("editAge").value;
    const contactNumber = document.getElementById("editContactNumber").value;
    const email = document.getElementById("editEmail").value;

    try {
      const response = await fetch(`${apiEndpoint}/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: name,
          age: age,
          contactNumber: contactNumber,
          email: email
        })
      });

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      alert("Customer updated successfully");
      popupForm.style.display = "none"; // Close the popup
      fetchCustomerDetails(); // Refresh customer data
    } catch (error) {
      console.error("Error saving customer:", error);
      alert("Failed to update the customer. Please try again.");
    }
  }

  // Close the popup when the "X" is clicked
  closePopupBtn.addEventListener("click", () => {
    popupForm.style.display = "none";
  });

  // Close the popup if the user clicks outside the form content
  window.addEventListener("click", (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });

  // Delete customer
  window.deleteCustomer = async function (id, userId) {
    if (confirm(`Are you sure you want to delete customer with User ID: ${userId}?`)) {
      try {
        const response = await fetch(`/user/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        alert(`Customer with User ID: ${userId} deleted successfully.`);
        fetchCustomerDetails(); // Refresh customer list
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete the customer. Please try again.');
      }
    }
  };

  // Fetch customer data on page load
  fetchCustomerDetails();
});


  document.addEventListener("DOMContentLoaded", () => {
  const employeeTableBody = document.getElementById("employee-table-body");
  const apiEndpoint = "http://localhost:8080/employee"; // Replace with your API URL

  // Function to fetch employee data from the API
  async function fetchEmployees() {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }

      const employees = await response.json();

      // Clear existing rows
      employeeTableBody.innerHTML = "";

      // Populate the table with fetched data
      employees.forEach((employee) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${employee.empId}</td>
          <td>${employee.empName}</td>
          <td>${employee.role}</td>
          <td>${employee.salary}</td>
          <td>${employee.shiftTime}</td>
          <td>${employee.contactNo}</td>
          <td>
            <button class="edit-btn" onclick="editEmployee('${employee.id}')">Edit</button>
            <button class="delete-btn" onclick="deleteEmployee('${employee.id}')">Delete</button>
          </td>
        `;
        employeeTableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

  // Call fetchEmployees on page load
  fetchEmployees();
});

document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:8080/ticket/all-ticket"; // Replace with your API endpoint
  const tableBody = document.querySelector("#ticket-table tbody");

  // Fetch tickets from API
  const fetchTickets = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch tickets: ${response.status} ${response.statusText}`);
      }
      const tickets = await response.json();
      renderTickets(tickets);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      alert("Could not fetch tickets. Please check your connection and try again.");
    }
  };

  // Render tickets in the table
  const renderTickets = (tickets) => {
    tableBody.innerHTML = ""; // Clear existing rows
    tickets.forEach((ticket) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${ticket.ticketId || "Unknown ID"}</td>
        <td>${ticket.user?.userName || "Unknown User"}</td>
        <td>${ticket.price || "N/A"}</td>
        <td>${ticket.validity || "N/A"}</td>
        <td>${ticket.issueDate || "N/A"}</td>
        <td>
          <button class="edit-btn" onclick="editTicket('${ticket.id?.timestamp}')">Edit</button>
          <button class="delete-btn" onclick="deleteTicket('${ticket.id?.timestamp}')">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  };

  // Edit ticket action (placeholder function)
  window.editTicket = (id) => {
    alert(`Edit ticket with ID: ${id}`);
    // Add logic to edit a ticket (e.g., open a modal with ticket details)
  };

  // Delete ticket action
  window.deleteTicket = async (id) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) {
          throw new Error(`Failed to delete ticket: ${response.status} ${response.statusText}`);
        }
        alert("Ticket deleted successfully!");
        fetchTickets(); // Refresh the table
      } catch (error) {
        console.error("Error deleting ticket:", error);
        alert("Could not delete ticket. Please try again later.");
      }
    }
  };

  // Fetch tickets on page load
  fetchTickets();
});

