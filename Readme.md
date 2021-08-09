# HTML (Hyper Text Markup Language)

- Not a Programming Language, Markup Language is to create documents.
- Derived from SGML, but lenient (ignore or auto-correct errors).
- Both Server ( Web Server) and Client ( Web Client) need to understand HTML.
- Current Version of HTML is "HTML 5"
- Every Old version of HTML had DTD 

    1. HTML 1.0
    2. HTML 2.0
    3. HTML 3.0
    4. HTML 4.01 
    5. HTML 5.0 

- HTML `rendering` is browser dependent.
- HTML is Case Insensitive (Start Tag and end tag may differ in Case).
- HTML Document has TWO parts: Head & Body
- HEAD is for Client (Web-Browser)
- BODY is for end-users

- Too many repeated elements (tags):
    Bold Text : b, strong

# Common HTML Elements
1. Heading Tags 

    H1, H2, H3, H4, H5, H6

2. Lists: Ordered, Unorderd and Definition List

3. HTML Table
    
    Simple : table -> tr -> td

    Standard : table -> thead, tbody & tfoot -> tr -> td

4.  HTML Forms

    > User Input Fields


    Field Type | Tag Used
    -----------|---------
    TEXT    | `<input type="text">` or `<input>`
    Checkbox | `<input type="checkbox" name="chkfield" value="Value1">`
    Radio | `<input type="radio" name="rdfield" value="Value1">`
    Button | `<input type="button" >`
    Submit Button | `<input type="submit">`
    Reset Button | `<input type="reset"> `

> Submit Button

1.  If validation is ENABLED, then performs Validation.
2.  Collects all Values and Names from all INPUT tags inside form.
3.  Read "METHOD" type and either SEND all parameter in URL (GET) or in Request Body (POST)