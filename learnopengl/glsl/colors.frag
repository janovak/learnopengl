#version 330 core
out vec4 FragColor;

uniform vec3 objectColor;
  
in vec3 LightingColor;

void main()
{
    FragColor = vec4(LightingColor * objectColor, 1.0);
}