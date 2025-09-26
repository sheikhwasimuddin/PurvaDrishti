import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)
# Enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# --- Configure the Google Gemini API ---
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY not found. Please set it in your .env file.")

genai.configure(api_key=api_key)

# --- Model Configuration ---
# The model will rely on its internal knowledge.
model = genai.GenerativeModel(model_name='gemini-2.5-flash-preview-05-20')


@app.route('/chat', methods=['POST'])
def chat():
    """
    Handles chat requests from the frontend.
    """
    try:
        data = request.get_json()
        user_message = data.get('message')
        language = data.get('language', 'en')

        if not user_message:
            return jsonify({"error": "Message cannot be empty"}), 400

        # --- THIS IS THE NEW, IMPROVED PROMPT ---
        system_instruction = f"""
        You are a helpful and knowledgeable assistant specializing in Disaster Management.
        Your primary role is to provide accurate, concise, and relevant information ONLY on topics related to natural disasters, emergency preparedness, response, recovery, and mitigation.
        
        **Formatting Instructions:**
        - Use markdown to format your answers.
        - Use **bold text** for emphasis on key terms (e.g., "**evacuation routes**").
        - Use bullet points with asterisks (*) for lists of items or steps.
        - Ensure your response is well-structured and easy to read.
        
        Do not answer questions outside of the disaster management scope. If a user asks something unrelated, politely decline and state your purpose.
        Respond in the user's requested language: {language}.
        """

        # Combine the instructions and the user query into a single prompt.
        full_prompt = f"{system_instruction}\n\nUser query: '{user_message}'"

        # --- Generate Content with Gemini ---
        response = model.generate_content(full_prompt)
        
        bot_reply = response.text
        
        return jsonify({
            "reply": bot_reply,
            "sources": [] # Return an empty array for sources
        })

    except Exception as e:
        print(f"An unexpected error occurred: {e}") 
        return jsonify({"error": "Failed to process the request on the server."}), 500

if __name__ == '__main__':
    app.run(debug=True)