# intelliscribe

Intelliscribe is a workflow application that bridges the gap between paper document and data entry. It automates the data entry process from paper to software by allowing the user to scan a document using a phone and autofill any desktop web application form using the data extracted from that document.

Features:

- Scans documents using phone and extract all key value pairs from scanned document and stores them in database for use on web forms
- chrome extension allows you to use the data to prefill form fields on the page that match data from the paper document automatically

Edge cases and possible solutions:
- problem: there are a vast variety of forms. google vision api can handle alot but for the ones it can't
  - possible solutions:
    - allow the user to auto generate a google vision friendly form from target webform fields
    - user friendly form builder that enables users to build custom printable form for use with google vision
    - allow the user to adjust the bounding boxes produced by google vision api and save as a profile for specific document
    - allow the user to pretrain google vision api for specific form (most likely not a good solution)
    - require user to create a form that follows certain rules to make sure it works well for automation
