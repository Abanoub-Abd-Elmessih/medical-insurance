import axios from "axios";

export async function useEmployees() {
    try {
      const response = await axios.get(
        "http://10.10.10.13:81/api/EmployeeDetails"
      );
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }